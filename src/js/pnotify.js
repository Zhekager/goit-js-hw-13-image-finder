import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function noDataEntered() {
  alert({
    text: 'Please enter required information!',
    delay: 1500,
  });
}

function noMatchesFound() {
  error({
    text: 'No matches found. Please enter correct data!',
    delay: 1500,
  });
}

export default { noDataEntered, noMatchesFound };