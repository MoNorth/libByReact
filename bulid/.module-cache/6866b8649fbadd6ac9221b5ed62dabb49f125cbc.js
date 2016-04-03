
var footerNavContentObj = {
	index : {
			page : "index",
			title : "西邮图书馆"
	},
	search : {
			page : "search",
			title : "图书搜索"
	},
	mine : {
			page : "mine",
			title : "我的资料"
	}
};



//外部容器
var Body = React.createClass({displayName: "Body",
	getInitialState : function(){
		return (
		footerNavContentObj.index
		);
	},
	handleClickFooter : function(page){
		var that = this;
		return function(e){
			that.setState(footerNavContentObj[page]);
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
	}
});

// //推荐区
// var Recommend = React.createClass({
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
