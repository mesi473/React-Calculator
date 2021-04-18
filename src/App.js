import React ,{Component} from 'react';
import './App.css';
class App extends Component {
    constructor(){
        super();
        this.state={
            buttonValue:'',
            textFieldValue:'',
            temp:'',
            operator:'',
            index:0,
            value1:'',
            boolean:true,
            textFieldValue2:''
        };
        this.numberFieldHandler=this.numberFieldHandler.bind(this);
        this.buttonClickHandler=this.buttonClickHandler.bind(this);
    };
    numberFieldHandler(){
        this.setState({textFieldValue:this.state.buttonValue});
    }
    buttonClickHandler(e){
        let temp1=[...this.state.temp];
        let x=[];
        let operator,a,b,t,v;
        switch(e.target.value){
            case '1':
                console.log(this.state.buttonValue)
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('1'),temp:this.state.temp.concat('1')});
                    return;
                }
                this.setState({buttonValue:'1'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('1'),temp:this.state.temp.concat('1')});
                break;
            case '2':
                console.log(this.state.buttonValue);
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('2'),temp:this.state.temp.concat('2')});
                    return;
                }
                this.setState({buttonValue:'2'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('2'),temp:this.state.temp.concat('2')});
                break;
            case '3':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('3'),temp:this.state.temp.concat('3')});
                    return;
                }
                this.setState({buttonValue:'3'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('3'),temp:this.state.temp.concat('3')});
                break;
            case '4':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('4'),temp:this.state.temp.concat('4')});
                    return;
                }
                this.setState({buttonValue:'4'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('4'),temp:this.state.temp.concat('4')});
                break;
            case '5':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('5'),temp:this.state.temp.concat('5')});
                    return;
                }
                this.setState({buttonValue:'5'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('5'),temp:this.state.temp.concat('5')});
                break;
            case '6':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('6'),temp:this.state.temp.concat('6')});
                    return;
                }
                this.setState({buttonValue:'6'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('8'),temp:this.state.temp.concat('6')});
                break;
            case '7':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('7'),temp:this.state.temp.concat('7')});
                    return;
                }
                this.setState({buttonValue:'7'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('7'),temp:this.state.temp.concat('7')});
                break;
            case '8':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('8'),temp:this.state.temp.concat('8')});
                    return;
                }
                this.setState({buttonValue:'8'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('8'),temp:this.state.temp.concat('8')});
                break;
            case '9':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('9'),temp:this.state.temp.concat('9')});
                    return;
                }
                this.setState({buttonValue:'9'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('9'),temp:this.state.temp.concat('9')});
                break;
            case '0':
                if(this.state.buttonValue===''&& this.state.textFieldValue){
                    this.setState({value1:'',index:0,textFieldValue:this.state.textFieldValue.concat('0'),temp:this.state.temp.concat('0')});
                    return;
                }
                this.setState({buttonValue:'0'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('0'),temp:this.state.temp.concat('0')});
                break;
            case '+':
                if(!this.state.textFieldValue) return ;
                if(isOperator(temp1[temp1.length-1])) return;
                if(this.state.buttonValue===''||this.state.boolean){
                    this.setState({boolean:false,textFieldValue:this.state.textFieldValue.concat('+')});
                }
                this.setState({temp:this.state.temp.concat('+')});
                this.setState({buttonValue:'+'});
                for(let i=this.state.index;i<temp1.length;i++){
                    x=x+temp1[i];
                }
                this.setState({index:parseInt(temp1.length+1)});
                this.setState({value1:`${x}`});
                operator=temp1[this.state.index-1];
                a=parseFloat(this.state.value1);
                b=parseFloat(x);
                t=[...this.state.value1];
                t.splice(0,this.state.value1.length);
                switch(operator){
                    case '+':
                        v=a+b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}+`,value1:t,textFieldValue2:t});
                        break;
                    case '-':
                        v=a-b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}+`,value1:t,textFieldValue2:t});
                        break;
                    case '*':
                        v=a*b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}+`,value1:t,textFieldValue2:t});
                        break;
                    case '/':
                        v=a/b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}+`,value1:t,textFieldValue2:t});
                        break;
                    default:
                        break;
                }
                break;
            case '*':
                if(!this.state.textFieldValue) return ;
                if(isOperator(temp1[temp1.length-1])) return;
                if(this.state.buttonValue===''||this.state.boolean){
                    this.setState({boolean:false,textFieldValue:this.state.textFieldValue.concat('*')});
                }
                this.setState({temp:this.state.temp.concat('*')});
                this.setState({buttonValue:'*'});
                for(let i=this.state.index;i<temp1.length;i++){
                    x=x+temp1[i];
                }
                this.setState({index:parseInt(temp1.length+1)});
                this.setState({value1:`${x}`});
                operator=temp1[this.state.index-1];
                a=parseFloat(this.state.value1);
                b=parseFloat(x);
                t=[...this.state.value1];
                t.splice(0,this.state.value1.length);
                switch(operator){
                    case '+':
                        v=a+b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}*`,value1:t,textFieldValue2:t});
                        break;
                    case '-':
                        v=a-b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}*`,value1:t,textFieldValue2:t});
                        break;
                    case '*':
                        v=a*b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}*`,value1:t,textFieldValue2:t});
                        break;
                    case '/':
                        v=a/b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}*`,value1:t,textFieldValue2:t});
                        break;
                    default:
                        break;
                }
                break;
            case '/':
                if(!this.state.textFieldValue) return ;
                if(isOperator(temp1[temp1.length-1])) return;
                if(this.state.buttonValue===''||this.state.boolean){
                    this.setState({boolean:false,textFieldValue:this.state.textFieldValue.concat('/')});
                }
                this.setState({temp:this.state.temp.concat('/')});
                this.setState({buttonValue:'/'});
                for(let i=this.state.index;i<temp1.length;i++){
                    x=x+temp1[i];
                }
                this.setState({index:parseInt(temp1.length+1)});
                this.setState({value1:`${x}`});
                operator=temp1[this.state.index-1];
                a=parseFloat(this.state.value1);
                b=parseFloat(x);
                t=[...this.state.value1];
                t.splice(0,this.state.value1.length);
                switch(operator){
                    case '+':
                        v=a+b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}/`,value1:t,textFieldValue2:t});
                        break;
                    case '-':
                        v=a-b;
                        t=t+v.toFixed(3).toString();
                        this.setState({textFieldValue:`${t}/`,value1:t,textFieldValue2:t});
                        break;
                    case '*':
                        v=a*b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}/`,value1:t,textFieldValue2:t});
                        break;
                    case '/':
                        v=a/b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}/`,value1:t,textFieldValue2:t});
                        break;
                    default:
                        break;
                }
                break;
            case '-':
                if(!this.state.textFieldValue) {
                    this.setState({temp:this.state.temp.concat('-'),textFieldValue:this.state.textFieldValue.concat('-')});
                    return;
                }
                if(isOperator(temp1[temp1.length-1])) return;
                if(this.state.buttonValue===''||this.state.boolean){
                    this.setState({boolean:false,textFieldValue:this.state.textFieldValue.concat('-')});
                }
                this.setState({temp:this.state.temp.concat('-')});
                this.setState({buttonValue:'-'});
                for(let i=this.state.index;i<temp1.length;i++){
                    x=x+temp1[i];
                }
                this.setState({index:parseInt(temp1.length+1)});
                this.setState({value1:`${x}`});
                operator=temp1[this.state.index-1];
                a=parseFloat(this.state.value1);
                b=parseFloat(x);
                t=[...this.state.value1];
                t.splice(0,this.state.value1.length);
                switch(operator){
                    case '+':
                        v=a+b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}-`,value1:t,textFieldValue2:t});
                        break;
                    case '-':
                        v=a-b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}-`,value1:t,textFieldValue2:t});
                        break;
                    case '*':
                        v=a*b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}-`,value1:t,textFieldValue2:t});
                        break;
                    case '/':
                        v=a/b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}-`,value1:t,textFieldValue2:t});
                        break;
                    default:
                        break;
                }
                break;
            case '.':
                if(this.state.buttonValue===''&& this.state.textFieldValue) return;
                if(!this.state.textFieldValue) return ;
                if(isOperator(temp1[temp1.length-1])) return;
                this.setState({temp:this.state.temp.concat('.')});
                this.setState({buttonValue:'.'});
                this.setState({textFieldValue:this.state.textFieldValue.concat('.')});
                break;
            case 'c':
                this.setState({buttonValue:'c'});
                let temp=[...this.state.textFieldValue];
                temp.splice(temp.length-1,1);
                let temp2=[...this.state.temp];
                if( isOperator(temp2.length-1) ||!isOperator(temp2.length-2)){
                    this.setState({boolean:true});
                }
                temp2.splice(temp2.length-1,1);
                this.setState({textFieldValue:temp.join(""),temp:temp2.join("")});
                break;
            case 'C':
                this.setState({buttonValue:'C',textFieldValue:'',temp:'',index:0,boolean:true});
                break;
            case '=':
                if(isOperator(temp1[temp1.length-1])) return;
                if(!this.state.textFieldValue) return ;
                this.setState({buttonValue:''});
                for(let i=this.state.index;i<temp1.length;i++){
                    x=x+temp1[i];
                }
                operator=temp1[this.state.index-1];
                a=parseFloat(this.state.value1);
                b=parseFloat(x);
                t=[...this.state.value1];
                t.splice(0,this.state.value1.length);
                switch(operator){
                    case '+':
                        v=a+b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}`,value1:t,textFieldValue2:t});
                        break;
                    case '-':
                        v=a-b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}`,value1:t,textFieldValue2:t});
                        break;
                    case '*':
                        v=a*b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}`,value1:t,textFieldValue2:t});
                        break;
                    case '/':
                        v=a/b;
                        t=t+v.toString();
                        this.setState({textFieldValue:`${t}`,value1:t,textFieldValue2:t});
                        break;
                    default:
                        break;
                }
                this.setState({value1:'',index:0,temp:`${v}`});
                break;  
            default:
                break;
        }
        function isOperator(n){
            if(n==='-'||n==='+'||n==='*'||n==='/'||n==='.') return true;
            else return false;
        }
    }
    render() { 

        return ( 
            <div className="App">
                <div className="Calc">
                    <input className="txt2" disabled value={this.state.textFieldValue2} type="text" placeholder="answer"/>
                    <input className="textField" disabled value={this.state.textFieldValue} type="text" placeholder="expression"/>
                    <div className="buttonArea">
                        <div className="buttons1">
                            <button onClick={this.buttonClickHandler} type="button" value="7" className="button">7</button>
                            <button onClick={this.buttonClickHandler} type="button" value="8" className="button">8</button>
                            <button onClick={this.buttonClickHandler} type="button" value="9" className="button">9</button>
                            <button onClick={this.buttonClickHandler} type="button" value="c" className="button">c</button>
                        </div>
                        <div className="buttons1">
                            <button onClick={this.buttonClickHandler} type="button" value="4" className="button">4</button>
                            <button onClick={this.buttonClickHandler} type="button" value="5" className="button">5</button>
                            <button onClick={this.buttonClickHandler} type="button" value="8" className="button">8</button>
                            <button onClick={this.buttonClickHandler} type="button" value="*" className="button">*</button>
                        </div>
                        <div className="buttons1">
                            <button onClick={this.buttonClickHandler} type="button" value="1" className="button">1</button>
                            <button onClick={this.buttonClickHandler} type="button" value="2" className="button">2</button>
                            <button onClick={this.buttonClickHandler} type="button" value="3" className="button">3</button>
                            <button onClick={this.buttonClickHandler} type="button" value="-" className="button">-</button>
                        </div>
                        <div className="buttons1">
                            <button onClick={this.buttonClickHandler} type="button" value="0" className="button">0</button>
                            <button onClick={this.buttonClickHandler} type="button" value="." className="button">.</button>
                            <button onClick={this.buttonClickHandler} type="button" value="/" className="button">/</button>
                            <button onClick={this.buttonClickHandler} type="button" value="+" className="addition">+</button>
                        </div>
                        <div className="buttons1">
                            <button onClick={this.buttonClickHandler} type="button" value="C" className="button">Del</button>
                            <button onClick={this.buttonClickHandler} type="button" value="=" className="equal">=</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
export default App;