


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
	render : function(){
		return (
			React.createElement("div", {className: "contentMine content"}, 
				React.createElement(ImgAndNav, {headImg: "img/headImg.jpeg", name: "张三"})
			)
		);

	}
});

var ImgAndNav = React.createClass({displayName: "ImgAndNav",
	getInitialState : function(){
		return "borrow";
	},

	render : function(){
		return (
			React.createElement("div", {className: "imgAndNav"}, 
				React.createElement("div", {className: "headImg", style: {"backgroundImage": "url(" + this.props.headImg + ")"}}), 
				React.createElement("p", null, this.props.name), 
				React.createElement(MineNav, {page: this.state})
			)
		);
	}
});

var MineNav = React.createClass({displayName: "MineNav",
	render : function(){
		var mineNavImg = MineNavImgObj.map(function(v){
			alert(v);
		})



		return (
			React.createElement("div", {className: "mineNav"})
		);

	}
});

var MineNavImg = React.createClass({displayName: "MineNavImg",
	render : function(){
		return (
			React.createElement("div", {className: "mineNavImg"}, 
				React.createElement("img", {src: this.props.img}), 
				React.createElement("p", {className: this.props.active}, this.props.title)
			)
		);
	}
});