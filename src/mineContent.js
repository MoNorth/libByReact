
var books = {
	headImg : "img/headImg.jpeg",
	name : "张三",
	borrowBooks : [
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15",
			returnData : "距还书还有3天",
			canR : false
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15",
			returnData : "距还书还有3天"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15",
			canR : false
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15",
			returnData : "距还书还有3天"
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "动态规划",
			author : "李四",
			content1 : "借阅日期: 2014-10-15",
			content2 : "归还日期: 2014-10-15"
		},
	],
	collectionBooks : [
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "JavaScript高级编程",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "JavaScript高级编程",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "JavaScript高级编程",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "JavaScript高级编程",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "JavaScript高级编程",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},

	],
	historyBooks : [
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "犀牛书",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "犀牛书",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "犀牛书",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "犀牛书",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
		},
		{
			bookImgSrc : "img/A4_000.jpg",
			bookName : "犀牛书",
			author : "李四",
			content1 : "出版社: 江苏文艺出版社",
			content2 : "内容简介: 这就是内容介绍啦。。。",
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

var MineContent = React.createClass({
	getInitialState : function(){
		return {page : "collection"};
	},
	handleOnClickMineNav : function(page){
		var that = this;
		return function(e){that.setState({page : page})};
	},
	render : function(){
		return (
			<div className="contentMine content">
				<ImgAndNav headImg={books.headImg} handleOnClickMineNav={this.handleOnClickMineNav} page={this.state.page} name={books.name}/>
				<MineContentDivOut page={this.state.page} books={books[this.state.page + "Books"]}/>
			</div>
		);

	}
});

var ImgAndNav = React.createClass({
	
	render : function(){
		return (
			<div className="imgAndNav">
				<div className="headImg" style={{"backgroundImage": "url(" + this.props.headImg + ")"}}/>
				<p>{this.props.name}</p>
				<MineNav page={this.props.page} handleOnClickMineNav={this.props.handleOnClickMineNav}/>
			</div>
		);
	}
});

var MineNav = React.createClass({
	
	render : function(){
		var page = this.props.page;
		var handleOnClickMineNav = this.props.handleOnClickMineNav;
		var mineNavImg = MineNavImgObj.map(function(value){
			return (value === page ?
					<MineNavImg img={"img/icon" + value + "000.png"} active="active" title={MineNavImgObjFont[value]}/> : 
					<MineNavImg img={"img/icon" + value + "fff.png"} handleOnClickMineNav={handleOnClickMineNav(value)} title={MineNavImgObjFont[value]}/>);
		});
		return (
			<div className="mineNav">
				{mineNavImg}
			</div>
		);

	}
});

var MineNavImg = React.createClass({
	render : function(){
		return (
			<div className="mineNavImg" onClick={this.props.handleOnClickMineNav}>
				<img src={this.props.img}/>
				<p className={this.props.active}>{this.props.title}</p>
			</div>
		);
	}
});


var MineContentDivOut = React.createClass({
	render : function(){
		var page = this.props.page;
		var books = this.props.books.map(function(book){
			return (
				<MineContentDiv page={page} {...book}/>
			);

		});
		return (
			<div className="mineContentDivOut">
				{books}
			</div>
		);

	}

});


var MineContentDiv = React.createClass({
	render : function(){
		var add = [];
		if(this.props.page === "borrow")
		{
			if(this.props.canR !== false)
				add.push(<div className="addData">续借</div>);
			add.push(<p className="returnData">{this.props.returnData}</p>)
		}
		return (
			<div className="mineContentDiv">
				<img src={this.props.bookImgSrc} className="left"/>
				<MineContentDivFont page={this.props.page} {...this.props}/>
				{add}
				<div className="clear"/>
			</div>

		);
	}


});	

var MineContentDivFont = React.createClass({
	render : function(){
		return (
			<div className={"left mineContentDivFont" + this.props.page}>
				<h5>{this.props.bookName}</h5>
				<h6>作者 : {this.props.author}</h6>
				<p>{this.props.content1}</p>
				<p>{this.props.content2}</p>
			</div>
		);

	}


});