
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
var Body = React.createClass({
	getInitialState : function(){
		return (
		footerNavContentObj.search
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
			<div id="out">
				<Nav title={this.state.title} page={this.state.page} />
				<Content page={this.state.page}/>
				<FooterNav page={this.state.page} handleClickFooter={this.handleClickFooter}/>
			</div>
		);
		
	}
});

//导航栏
var Nav = React.createClass({
	render : function(){
		return (
			<nav className="headerNav">
				{this.props.title}
			</nav>
		);
	}
});
//底部导航栏
var FooterNav = React.createClass({
	render : function(){
		return(
			
				<FooterNavContent page={this.props.page} handleClickFooter={this.props.handleClickFooter}/>
		
		);
	}
});



var Content = React.createClass({
	render : function(){
		switch(this.props.page){
			case 'index' : 
				return (<IndexContent {...indexContentObj}/>);
			case 'search' :
				return (<SearchContent />);
			case 'mine' : 
				return (<MineContent />);
		}
	}
});

ReactDOM.render(
	<Body />,
	document.body
);
