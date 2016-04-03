
var books = {
	headImg : "img/headImg.jpeg",
	name : "张三",
	borrowBooks : [
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
	]
}

	


var MineNavImgObj = [
	"borrow","collection","history"
];


var MineNavImgObjFont = {
	borrow : "我的借阅",
	collection : "我的收藏",
	history : "借阅历史"
}


// var MineNavImgObj = {
// 	myjie : "我的借阅",
// 	asd : "asdasd"
// }

var MineContent = React.createClass({displayName: "MineContent",
	getInitialState : function(){
		return {page : "borrow"};
	},
	handleOnClickMineNav : function(page){
		var that = this;
		return function(e){that.setState({page : page})};
	},
	render : function(){
		return (
			React.createElement("div", {className: "contentMine content"}, 
				React.createElement(ImgAndNav, {headImg: books.headImg, handleOnClickMineNav: this.handleOnClickMineNav, page: this.state.page, name: books.name}), 
				React.createElement(MineContentDivOut, {page: this.state.page, books: books.borrowBooks})
			)
		);

	}
});

var ImgAndNav = React.createClass({displayName: "ImgAndNav",
	
	render : function(){
		return (
			React.createElement("div", {className: "imgAndNav"}, 
				React.createElement("div", {className: "headImg", style: {"backgroundImage": "url(" + this.props.headImg + ")"}}), 
				React.createElement("p", null, this.props.name), 
				React.createElement(MineNav, {page: this.props.page, handleOnClickMineNav: this.props.handleOnClickMineNav})
			)
		);
	}
});

var MineNav = React.createClass({displayName: "MineNav",
	
	render : function(){
		var page = this.props.page;
		var handleOnClickMineNav = this.props.handleOnClickMineNav;
		var mineNavImg = MineNavImgObj.map(function(value){
			return (value === page ?
					React.createElement(MineNavImg, {img: "img/icon" + value + "000.png", active: "active", title: MineNavImgObjFont[value]}) : 
					React.createElement(MineNavImg, {img: "img/icon" + value + "fff.png", handleOnClickMineNav: handleOnClickMineNav(value), title: MineNavImgObjFont[value]}));
		});
		return (
			React.createElement("div", {className: "mineNav"}, 
				mineNavImg
			)
		);

	}
});

var MineNavImg = React.createClass({displayName: "MineNavImg",
	render : function(){
		return (
			React.createElement("div", {className: "mineNavImg", onClick: this.props.handleOnClickMineNav}, 
				React.createElement("img", {src: this.props.img}), 
				React.createElement("p", {className: this.props.active}, this.props.title)
			)
		);
	}
});


var MineContentDivOut = React.createClass({displayName: "MineContentDivOut",
	render : function(){
		var page = this.props.page;
		var books = this.props.books.map(function(book){
			return (
				React.createElement(MineContentDiv, React.__spread({page: this.props.page},  book))
			);

		});
		return (
			React.createElement("div", {className: "mineContentDivOut"}, 
				books
			)
		);

	}

});


var MineContentDiv = React.createClass({displayName: "MineContentDiv",
	render : function(){
		return (
			React.createElement("div", {className: "mineContentDiv"}, 
				React.createElement("img", {src: this.props.bookImgSrc, className: "left"}), 
				React.createElement(MineContentDivFont, React.__spread({page: this.props.page},  this.props))
			)

		);
	}


});	

var MineContentDivFont = React.createClass({displayName: "MineContentDivFont",
	render : function(){
		return (
			React.createElement("div", {className: "left mineContentDivFont" + this.props.page}, 
				React.createElement("h5", null, this.props.bookName), 
				React.createElement("h6", null, this.props.author), 
				React.createElement("p", null, this.props.content1), 
				React.createElement("p", null, this.props.content2)
			)
		);

	}


});