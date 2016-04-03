//内容区

var indexContentObj = {
	imgSrc : "img/backgrond.png"
}




var Content = React.createClass({displayName: "Content",
	render : function(){
		switch(this.props.page){
			case 'index' : 
				return (React.createElement(IndexContent, React.__spread({},  indexContentObj)));
		}
	}
});


var IndexContent = React.createClass({displayName: "IndexContent",
	render : function(){
		return (
			React.createElement("div", {className: "contentIndex content"}, 
				React.createElement("img", {src: this.props.imgSrc, className: "hotBook"}), 	
				React.createElement(IndexContentBooks, null)
			)
		);
	}
});

var IndexContentBooks = React.createClass({displayName: "IndexContentBooks",
	render : function(){
		return (
			React.createElement("div", {className: "contentBook"})
		);
	}
});

var IndexContentBooksDiv = React.createClass({displayName: "IndexContentBooksDiv",
	render : function(){
		
		return (
			React.createElement("div", {className: "indexBooksDiv"}, 
				React.createElement(IndexBooksTitle, {title: this.props.title, time: this.props.time})
			)
		);

	}
});

var IndexBooksTitle = React.createClass({displayName: "IndexBooksTitle",
	render : function(){
		return (
			React.createElement("div", {className: "indexBooksTitle"}, 
				React.createElement("h2", {className: "left"}, this.props.title), 
				React.createElement("h6", {className: "left"}, this.props.time), 
				React.createElement("h5", {className: "right"}, "更多")
			)
		);
	}
});

var IndexBooks = React.createClass({displayName: "IndexBooks",
	render : function(){
		var books = this.props.bookDiv.map(function(books){
			return (React.createElement(IndexBook, React.__spread({},  books)));
		});
		return (
			React.createElement("div", {className: "indexBooks"}, 
			books
			)
		);
	}
});

var IndexBook = React.createClass({displayName: "IndexBook",
	render : function(){
		return (
			React.createElement("div", {className: "indexBook"}, 
				React.createElement("img", {src: this.props.bookImg}), 
				React.createElement("p", null, this.props.bookTitle)
			)
		);
	}


	
});