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
			 case "index" : //footerNav.push(<div onClick={this.props.handleClickFooter("search")}></div>);
			// 			   footerNav.push(<div className="active"></div>);
			// 			   footerNav.push(<div></div>);
						   break;
			// case "search" : footerNav.push(<div className="active"></div>);
			// 			    footerNav.push(<div onClick={this.props.handleClickFooter("index")}></div>);
			// 			    fovoterNav.push(<div></div>);
			// 			    break;
		}
		return footerNav;
	}
});