
//外部容器
var Body = React.createClass({displayName: "Body",
	getInitialState : function(){
		return (
		{
			page : "index",
			title : "西邮图书馆"
		}
		);
	},
	handleClickFooter : function(page){
		// alert("asd");
		var that = this;
		switch(page){
			case "index" : return function(e){
				this.setState({
					page : "index",
					title : "西邮图书馆"
				})};
			case "search" : return function(e){
				this.setState({
					page : "search",
					title : "图书搜索"
				})};
			};
			
	},
	render : function(){
		return (
			React.createElement("div", {id: "out"}, 
				React.createElement(Nav, {title: this.state.title, page: this.state.page}), 

				React.createElement(FooterNav, {page: this.state.page, handleClickFooter: this.handleClickFooter})
			)
		);
		
	}
});

//导航栏
var Nav = React.createClass({displayName: "Nav",
	render : function(){
		return (
			React.createElement("nav", {className: "headerNav"}, 
				this.props.title
			)
		);
	}
});
//底部导航栏
var FooterNav = React.createClass({displayName: "FooterNav",
	render : function(){
		return(
			
				React.createElement(FooterNavContent, {page: this.props.page, handleClickFooter: this.props.handleClickFooter})
		
		);

		// switch(this.props.page)
		// {
		// 	case 'index' : return(
		// 						<footer className="footerNav">
		// 							<div onClick={this.props.handleClickFooterFrist}></div>
		// 							<div className="active"></div>
		// 							<div></div>
		// 						</footer>
		// 					);break;
		// 	case 'search' : return(
		// 						<footer className="footerNav">
		// 							<div className="active"></div>
		// 							<div></div>
		// 							<div></div>
		// 						</footer>
		// 					);break;
		// }

	}
});

// //推荐区
// var Recommend = React.createClass({
// 	render : function(){

// 	}
// });



// //内容区
// var Content = React.createClass({
// 	render : function(){

// 	}
// });

// //内容区分栏
// var ContentPartition = React.createClass({
// 	render : function(){

// 	}
// });

// //书籍区
// var ContentPartitionBook = React.createClass({
// 	render : function(){

// 	}
// });

ReactDOM.render(
	React.createElement(Body, null),
	document.body
);
