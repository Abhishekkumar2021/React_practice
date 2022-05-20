class Machine extends React.Component {
    render() {
        const {s1,s2,s3} = this.props;
        let message = '';
        if(s1===s2  && s2===s3){
            message = 'you win!';
        }
        else{
            message = 'you loss!';
        }
        return(
            < div >
              <h2> {s1,s2,s3} </h2>
              <h3> {message}</h3>
            </div>     
        )
        
    }
}
