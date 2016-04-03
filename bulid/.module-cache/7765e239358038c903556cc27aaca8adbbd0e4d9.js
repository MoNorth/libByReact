// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }

var pageStr = [
	"index","search","mine"
]
// var getFooterNav = function(page,that){

// 	// var doms = [];
// 	// for(var i = 0; i < 3; i++)
// 	// {
// 	// 	if(pageNum[page] === i)
// 	// 		doms.push(<div className="active"></div>);
// 	// 	else
// 	// 		doms.push(<div onClick={that.props.handleClickFooter(pageStr[i])}></div>);
// 	// }

// 	var doms = pageStr.map(function(value){
// 		return value === page ?
// 				<div className="active"></div> : 
// 				<div onClick={that.props.handleClickFooter(value)}></div>;
// 	});
// 	return doms;
// }


var FooterNavContent = React.createClass({displayName: "FooterNavContent",
	render : function(){
		// return getFooterNav(this.props.page,this);
		// return <div>{this.props.page}</div>;
		var page = this.props.page;
		var handleClickFooter = this.props.handleClickFooter;
		// handleClickFooter();
		var doms = pageStr.map(function(value){
			return (value === page ?
					React.createElement("div", {className: "active"}, React.createElement("img", {src: "img/iconme000.png"})) : 
					React.createElement("div", {onClick: handleClickFooter(value)}));
			
		});
		return (React.createElement("footer", {className: "footerNav"}, doms));
	}
});