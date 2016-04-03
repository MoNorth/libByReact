//内容区

var indexContentObj = {
	imgSrc : "img/backgrond.png",
	top : {
		title : "借阅排行",
		time : "11月11日",
		bookDiv : [
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},

		]
	},
	bottom : {
		title : "新书推荐",
		time : "11月11日",
		bookDiv : [
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/backgrond.png",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},
			{
				bookImg : "img/A4_000.jpg",
				bookTitle : "设计心里学"
			},

		]
	}
}







var IndexContent = React.createClass({
	render : function(){
		return (
			<div className="contentIndex content">
				<img src={this.props.imgSrc} className="hotBook"/>	
				<IndexContentBooks top={this.props.top} bottom={this.props.bottom}/>
			</div>
		);
	}
});

var IndexContentBooks = React.createClass({
	render : function(){
		var top = this.props.top;
		var bottom = this.props.bottom;
		return (
			<div className="contentBook">
				<IndexContentBooksDiv {...top} />
				<IndexContentBooksDiv {...bottom} />
			</div>
		);
	}
});

var IndexContentBooksDiv = React.createClass({
	render : function(){
		
		return (
			<div className="indexBooksDiv">
				<IndexBooksTitle title={this.props.title} time={this.props.time} />
				<IndexBooks bookDiv={this.props.bookDiv}/>
			</div>
		);

	}
});


var IndexBooksTitle = React.createClass({
	render : function(){
		return (
			<div className="indexBooksTitle clear">
				<h2 className="left">{this.props.title}</h2>
				<h6 className="left">{this.props.time + "更新"}</h6>
				<h5 className="right">更多 》</h5>
			</div>
		);
	}
});

var IndexBooks = React.createClass({
	render : function(){
		var books = this.props.bookDiv.map(function(books){
			return (<IndexBook {...books}/>);
		});
		return (
			<div className="indexBooks clear">
				{books}
				<div className="clear"/>
			</div>
		);
	}
});

var IndexBook = React.createClass({
	render : function(){
		return (
			<div className="indexBook left">
				<img src={this.props.bookImg}/>
				<p>{this.props.bookTitle}</p>
			</div>
		);
	}


	
});