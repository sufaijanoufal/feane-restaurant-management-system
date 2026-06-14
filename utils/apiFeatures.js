class APIFeatures {
  constructor(query, queryString) {
    this.query = query;           // Mongoose query
    this.queryString = queryString; // req.query
  }


  // 🔹 FILTERING
  filter() {
    const queryObj = { ...this.queryString };


    const excludedFields = ['page', 'sort', 'limit', 'fields','search'];
    excludedFields.forEach(el => delete queryObj[el]);


    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      match => `$${match}`
    );


    this.query = this.query.find(JSON.parse(queryStr));
console.log('REQ QUERY:', this.queryString);
console.log('AFTER DELETE:', queryObj);
console.log('FINAL FILTER:', JSON.parse(queryStr));
    return this; // 🔥 for chaining
  }


  // 🔹 SORTING
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }


    return this;
  }


  // 🔹 FIELD LIMITING
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }


    return this;
  }


  // 🔹 PAGINATION
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 5;
    const skip = (page - 1) * limit;


    this.query = this.query.skip(skip).limit(limit);


    return this;
  }
 search() {

  if (
    this.queryString.search &&
    this.queryString.search.trim() !== ''
  ) {

    this.query =
      this.query.find({

        name: {

          $regex:
            this.queryString.search,

          $options: 'i'
        }
      });
  }

  return this;
}
}


module.exports = APIFeatures;
