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
		// console.log(this.refs.input.value);
		if(this.refs.inputs.value)
			this.refs.input.style.width="12rem";
		else
			this.refs.input.style.width="75%";
		// alert("asd");
	},
	render : function(){
		return (
			React.createElement("div", {className: "searchBar"}, 
				React.createElement("div", {className: "input", ref: "input"}, 
					React.createElement("input", {type: "text", onInput: this.handleOninput, ref: "inputs"})
				), 
				
				React.createElement("div", {className: "right"}, "取消"), 
				React.createElement("div", {className: "right"}, "确定")
			)
		);
	}
});