import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  checkoutFormGroup: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];


  constructor(private formBuilder: FormBuilder, private formService: FormServiceService){}

  ngOnInit(): void{
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear:['']
      }),
    });

    // populate credit card months
    const startMonth: number = new Date().getMonth() + 1;
    console.log("startMonth: " + startMonth);

    this.formService.getCreditCardMonths(startMonth).subscribe(
      data =>{
        console.log("Retrieved credit card month: " + JSON.stringify(data));
        this.creditCardMonths = data;
      }
    );

    //populate credit card years

    this.formService.getCreditCardYears().subscribe(
      data => {
        console.log("retrieved credit card years: "+ JSON.stringify(data));
        this.creditCardYears = data;
      }
    )
  }

  copyShippingAddressToBillingAddress(event){
    if(event.target.checked){
      this.checkoutFormGroup.controls['billingAddress'].setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
      //this.billingAddressStates = this.shippingAddressStates;
    }else{
      this.checkoutFormGroup.controls['billingAddress'].reset();
     // this.billingAddressStates = [];
    }
  }

  onSubmit(){
    console.log("Handling the submit button");
    console.log("The email address if " + this.checkoutFormGroup.get('customer').value.email);
  }

}
