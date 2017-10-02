import { Template } from 'meteor/templating';
import { Notes } from  '../lib/collections.js';
import './login.html';


Template.body.helpers({
/*  notes:[
    {text: 'my city 1'},
    {text: 'my city 2'},
    {text: 'my city 3'}
  ]*/

notes(){
  return Notes.find({});
}

});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();

  // get input value

  const target = event.target;
  const text = target.text.value;

  //insert note into collections
  Notes.insert({
    text,
    createdAt: new Date()
  });

  // clear form

  target.text.value = "";


  //close modal

  $('#addModal').modal('close');
    return false;
  }
});


Template.note.events({
  'click .delete-note':function(){
    Notes.remove(this._id);
    return false;
  }
});
