
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
	render : function(){
		return (
			React.createElement(Nav, {title: this.state.title, page: this.state.page})
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


// //推荐区
// var Recommend = React.createClass({
// 	render : function(){

// 	}
// });

//底部导航栏
// var FooterNav = React.createClass({
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
