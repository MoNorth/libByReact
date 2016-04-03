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
	handleOninput : function(){
		this.refs.input.style.width="13rem";
		// alert("asd");
	},
	render : function(){
		return (
			React.createElement("div", {className: "searchBar"}, 
				React.createElement("div", {className: "input", ref: "input"}, 
					React.createElement("input", {type: "text", onInput: this.handleOninput})
				), 
				
				React.createElement("div", {className: "right"}, "取消"), 
				React.createElement("div", {className: "right"}, "确定")
			)
		);
	}
});