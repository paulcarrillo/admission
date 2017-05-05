 "use strict";

 var Dispatcher = require('../dispatcher/appDispatcher');
 var AuthorApi = require('../api/authorApi');
 var ActionTypes = require('../constants/actionTypes');

 var AuthorActions = {
   createAuthor: function(author) {
     var newAuthor = AuthorApi.saveAuthor(author);

    //Hey dipatcher go tell all the stores that an author was just created.
     Dispatcher.dispatch({
       actionType: ActionTypes.CREATE_AUTHOR,
       author: newAuthor
     });
   },

  UpdateAuthor: function(author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    });
  }
};

module.exports = AuthorActions;
