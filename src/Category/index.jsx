import React from 'react';
import './category.css';
import FormInput from './forminput';

class Index extends React.Component{
    itemModel = {
        id:0,
        initial :'',
        name :'',
        isActive: false
    }
    constructor(){
        super();
        this.state={
            ListData :
            [
                {id : 1, initial : 'FSH', name: 'Fashion', isActive:true},
                {id : 2, initial : 'FOO', name: 'Food', isActive:true},
                {id : 3, initial : 'ELC', name: 'Electronic', isActive:true},
                {id : 4, initial : 'FUR', name: 'Furniture', isActive:true},
                {id : 5, initial : 'DRN', name: 'Drink', isActive:true}
            ],
            isShow:false,
            categoryModel : this.itemModel
        }
    }
    handlerCreate = () =>{
        const idMax = this.state.ListData.length;
        console.log(this.state.categoryModel)
        this.setState({
            isShow:true,
            categoryModel:{
                ...this.state.categoryModel,
                ['id']:idMax + 1
            }
        })
    }
    handlerEdit = (id) => {
        const selected = this.state.ListData.find(a  => a.id === id);
        this.setState({
            isShow: true,
            categoryModel:selected
        })
    }
    handlerCancel = () =>{
        
        this.setState({
            isShow:false
        })
    }
    functionChange = name => ({target:{value}}) => {
        this.setState({
            categoryModel : {   
            ...this.state.categoryModel,
            [name] :value
        }
        })
    }
    functionChecked= name => ({target: {checked}}) => {
        this.setState({
            categoryModel:{
            ...this.state.categoryModel,
            [name] :checked
            }
        })
    }
    functionSave = () => {
        const list = this.state.ListData;
 

        list.push(this.state.categoryModel);
        this.setState({
            ListData:list,
            isShow:false
        })

    }

    render(){
        return (
            <div>
                <p>Data Category</p>
                {JSON.stringify(this.state.categoryModel)}
                {this.state.isShow ? 
                <FormInput handlerCancel={this.handlerCancel} functionChange={this.functionChange} 
                functionChecked={this.functionChecked} functionSave={this.functionSave}
                categoryModel={this.state.categoryModel}
                /> : null} <br />
                
                <button onClick={this.handlerCreate}>Create New</button>
                <table id="category" >
                    <tr>
                        <th>Id</th>
                        <th>Initial</th>
                        <th>Name</th>
                        <th>isActive</th>
                        <th>Action</th>
                    </tr>
                    {
                        this.state.ListData.map(data=> {
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.initial}</td>
                                    <td>{data.name}</td>
                                    <td>{data.isActive.toString()}</td>
                                    <td><button onClick={()=>this.handlerEdit(data.id)}>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Index