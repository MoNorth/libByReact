//内容区

var indexContentObj = {
	imgSrc : "img/backgrond.png",
	top : {
		title : "借阅排行",
		time : "11月11日",
		bookDiv : [
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},

		]
	}
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
				React.createElement(IndexContentBooks, {top: this.props.top})
			)
		);
	}
});

var IndexContentBooks = React.createClass({displayName: "IndexContentBooks",
	render : function(){
		var top = this.props.top;
		return (
			React.createElement("div", {className: "contentBook"}, 
				React.createElement(IndexContentBooksDiv, React.__spread({},  top))
			)
		);
	}
});

var IndexContentBooksDiv = React.createClass({displayName: "IndexContentBooksDiv",
	render : function(){
		
		return (
			React.createElement("div", {className: "indexBooksDiv"}, 
				React.createElement(IndexBooksTitle, {title: this.props.title, time: this.props.time}), 
				React.createElement(IndexBooks, {bookDiv: this.props.bookDiv})
			)
		);

	}
});

var IndexBooksTitle = React.createClass({displayName: "IndexBooksTitle",
	render : function(){
		return (
			React.createElement("div", {className: "indexBooksTitle clear"}, 
				React.createElement("h2", {className: "left"}, this.props.title), 
				React.createElement("h6", {className: "left"}, this.props.time + "更新"), 
				React.createElement("h5", {className: "right"}, "更多》")
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
			React.createElement("div", {className: "indexBooks clear"}, 
			books
			)
		);
	}
});

var IndexBook = React.createClass({displayName: "IndexBook",
	render : function(){
		return (
			React.createElement("div", {className: "indexBook left"}, 
				React.createElement("img", {src: this.props.bookImg}), 
				React.createElement("p", null, this.props.bookTitle)
			)
		);
	}


	
});