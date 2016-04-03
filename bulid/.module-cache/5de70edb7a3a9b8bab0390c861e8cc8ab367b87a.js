

var MineContent = React.createClass({displayName: "MineContent",
	render : function(){
		return (
			React.createElement("div", {className: "contentMine content"}, 
				React.createElement(ImgAndNav, {headImg: "img"})
			)
		);

	}
});

var ImgAndNav = React.createClass({displayName: "ImgAndNav",
	render : function(){
		return (
			React.createElement("div", {className: "imgAndNav"}, 
				React.createElement("div", {className: "headImg", style: {"background-image": "url(" + this.props.headImg + ")"}})
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