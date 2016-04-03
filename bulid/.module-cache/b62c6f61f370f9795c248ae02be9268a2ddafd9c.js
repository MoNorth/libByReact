//内容区
var Content = React.createClass({displayName: "Content",
	render : function(){
		switch(this.props.page){
			case 'index' : 
				return (React.createElement(IndexContent, null));
		}
	}
});


var IndexContent = React.createClass({displayName: "IndexContent",
	render : function(){
		return (
			React.createElement("div", {className: "contentIndex"}, 
				React.createElement("img", {src: this.props.imgSrc})	
			)
		);
	}
});