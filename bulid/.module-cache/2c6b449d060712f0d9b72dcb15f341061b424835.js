var SearchContent = React.createClass({displayName: "SearchContent",
	render : function(){
		return (
			React.createElement("div", {className: "contentSearch content"}, 
				React.createElement(SearchBar, null)
			)
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",
	render : function(){
		return (
			React.createElement("div", {className: "searchBar"}, 
				React.createElement("input", {type: "text", className: "left"}), 
				React.createElement("div", {className: "left"}, "确定"), 
				React.createElement("div", {className: "left"}, "取消")
			)
		);
	}
});