// var footerNavContentObj = {
// 	index : [
// 		{

// 		}
// 	]	
// }


var footerNavContent = React.createClass({displayName: "footerNavContent",
	render : function(){
		var footerNav = [];
		switch(this.props.page)
		{
			case "index" : footerNav.push(React.createElement("div", {onClick: this.props.handleClickFooter("search")}));
						   footerNav.push(React.createElement("div", {className: "active"}));
						   footerNav.push(React.createElement("div", null));
						   break;
			// case "search" : footerNav.push(<div className="active"></div>);
			// 			    footerNav.push(<div onClick={this.props.handleClickFooter("index")}></div>);
			// 			    fovoterNav.push(<div></div>);
			// 			    break;
		}
		return footerNav;
	}
});