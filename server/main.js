import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	AccountsGuest.enabled = true;
  // code to run on server at startup
});

