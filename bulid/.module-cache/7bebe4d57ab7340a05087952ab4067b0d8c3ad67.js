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
				"div", 
				React.createElement("input", {type: "text"}), 
				React.createElement("div", {className: "right"}, "确定"), 
				React.createElement("div", {className: "right"}, "取消")
			)
		);
	}
});