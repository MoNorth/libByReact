
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
				React.createElement(Content, {page: this.state.page}), 
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



var Content = React.createClass({displayName: "Content",
	render : function(){
		switch(this.props.page){
			case 'index' : 
				return (React.createElement(IndexContent, React.__spread({},  indexContentObj)));
			case 'search' :
				return (React.createElement(MineContent, null));
			case 'mine' : 
				return (React.createElement("div", null));
		}
	}
});

ReactDOM.render(
	React.createElement(Body, null),
	document.body
);
