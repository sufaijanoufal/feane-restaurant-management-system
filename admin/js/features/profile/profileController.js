import * as model
  from './profileModel.js';

import {
  renderProfilePage,
  renderUser
} from './profileView.js';

export const initProfile =
  async () => {

    renderProfilePage();

    await loadUser();

    initProfileUpdate();
    document
  .getElementById(
    'profilePhoto'
  )
  .addEventListener(
    'change',
    e => {

      const file =
        e.target.files[0];

      if (!file) return;

      document.getElementById(
        'profilePreview'
      ).src =
        URL.createObjectURL(
          file
        );
    }
  );

    initPasswordUpdate();
  };

const loadUser =
  async () => {

    const user =
      await model.getMe();

    renderUser(user);
  };

const initProfileUpdate =
  () => {

    document
      .getElementById(
        'profileForm'
      )
      .addEventListener(
        'submit',
        async e => {

          e.preventDefault();

          const formData =
            new FormData();

          formData.append(
            'name',

            document.getElementById(
              'profileName'
            ).value
          );

          formData.append(
            'email',

            document.getElementById(
              'profileEmail'
            ).value
          );

          try {

            await model.updateMe(
              formData
            );

            alert(
              'Profile updated'
            );

          } catch (err) {

            alert(
              err.response?.data
                ?.message ||
              err.message
            );
          }
        }
      );
  };

const initPasswordUpdate =
  () => {

    document
      .getElementById(
        'passwordForm'
      )
      .addEventListener(
        'submit',
        async e => {

          e.preventDefault();

          try {

            await model.updatePassword({

              passwordCurrent:
                document.getElementById(
                  'passwordCurrent'
                ).value,

              password:
                document.getElementById(
                  'password'
                ).value,

              passwordConfirm:
                document.getElementById(
                  'passwordConfirm'
                ).value
            });

            alert(
              'Password updated'
            );

            document
              .getElementById(
                'passwordForm'
              )
              .reset();

          } catch (err) {

            alert(
              err.response?.data
                ?.message ||
              err.message
            );
          }
        }
      );
  };