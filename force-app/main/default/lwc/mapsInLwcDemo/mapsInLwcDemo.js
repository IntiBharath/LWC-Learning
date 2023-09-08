import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts'

export default class MapsInLwcDemo extends LightningElement {
    mapMarkers=[]
    markersTitle='Accounts Location'
    selectedMarker=''
    @wire(getAccounts)
    accountHandler({data,error}){
        if(data){
            console.log(data)
            this.formatResponse(data);
        }if(error){
            console.error(error)
        }
    }

    formatResponse(data){
       this.mapMarkers= data.map(item=>{
            return{
                location:{
                    Street:item.BillingStreet || '',
                    City:item.BillingCity||'',
                    PostalCode: item.BillingPostalCode||'',
                    State:item.BillingSate||'',
                    Country:item.BillingCountry || ''
                },
                icon:'standard:account',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value;
    }

    callMarkerHandler(event){
        //selectedMarkerValue is an inbuilt property of lightningmap to display the selected map
        this.selectedMarker = event.detail.selectedMarkerValue
    }
}