var SearchContent = React.createClass({
	render : function(){
		return (
			<div className="contentSearch content">
				<SearchBar />
			</div>
		);
	}
});

var SearchBar = React.createClass({
	handleOninput : function(){
		// console.log(this.refs.input.value);
		if(this.refs.inputs.value)
			this.refs.input.style.width="60%";
		else
			this.refs.input.style.width="75%";
		// alert("asd");
	},
	componentDidMount  : function(){
		this.refs.inputs.focus();
		// alert("asd");
	},
	render : function(){
		return (
			<div className="searchBar">
				<div className="input" ref="input">
					<input type="text" onInput={this.handleOninput} ref="inputs"/>
				</div>
				
				<div className="right">取消</div>
				<div className="right">确定</div>
			</div>
		);
	}
});