
/*
 * GET home page.
 */

exports.view = function(req, res){ //(request,result)
  var nameToShow = req.params.userName; //get parameter from request, username is in the params object
  console.log("name is " + nameToShow);
  res.render('index', {
    'name': nameToShow,
  });
};
