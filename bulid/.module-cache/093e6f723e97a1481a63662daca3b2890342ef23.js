// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }

var pageStr = [
	"index","search","mine"
]

var FooterNavContent = React.createClass({displayName: "FooterNavContent",
	render : function(){
		// return getFooterNav(this.props.page,this);
		// return <div>{this.props.page}</div>;
		var page = this.props.page;
		var handleClickFooter = this.props.handleClickFooter;
		// handleClickFooter();
		var doms = pageStr.map(function(value){
			return (value === page ?
					React.createElement("div", {className: "active"}, React.createElement("img", {src: "img/icon"+value+"fff.png"})) : 
					React.createElement("div", {onClick: handleClickFooter(value)}, React.createElement("img", {src: "img/icon"+value+"000.png"})));
			
		});
		return (React.createElement("footer", {className: "footerNav"}, doms));
	}
});