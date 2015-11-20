(function(){
	/**
	 * [handleDBError description]
	 * @param  {[type]} err [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.handleDBError = function(err, res){
		var http_code = 0;
		switch(err.name){
			case 'ValidationError':
			case	  'CastError' :
			case	  'Not Found' :
					res.status(400);
					http_code = 400;
				break;
			default: res.status(500);
					 http_code = 400;
				break;
		}
		res.send({'developerMessage': err.message, 'HTTPStatus': http_code});
	}
	/**
	 * [handleDBError description]
	 * @param  {[type]} object [description]
	 * @param  {[type]} res    [description]
	 * @return {[type]}        [description]
	 */
	exports.handleDBSuccess = function(object, res){
		res.json({message: object.name + ' has been successfully created', HTTPStatus: object.http_code});
	}
})();