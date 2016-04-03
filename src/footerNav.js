
var pageStr = [
	"index","search","mine"
]

var FooterNavContent = React.createClass({
	render : function(){
		var page = this.props.page;
		var handleClickFooter = this.props.handleClickFooter;
		var doms = pageStr.map(function(value){
			return (value === page ?
					<div className="active"><img src={"img/icon"+value+"fff.png"}/></div> : 
					<div onClick={handleClickFooter(value)}><img src={"img/icon"+value+"000.png"}/></div>);
			
		});
		return (<footer className="footerNav">{doms}</footer>);
	}
});