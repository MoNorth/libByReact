

var MineContent = React.createClass({displayName: "MineContent",
	render : function(){
		return (
			React.createElement("div", {className: "contentMine content"}, 
				React.createElement(ImgAndNav, {headImg: "img", name: "张三"})
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
				React.createElement(MineNav, null)
			)
		);
	}
});

var MineNav = React.createClass({displayName: "MineNav",
	render : function(){
		return (
			React.createElement("div", {className: "mineNav"})
		);

	}
});