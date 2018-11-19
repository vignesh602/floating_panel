import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  hidden:boolean =true ;

  ngOnInit() {

    this.initFloatingPanel();
  }
  

  initFloatingPanel(){
    $(document).ready(function() {
      $('#content').hide();
      $('#mydiv').draggable({
        handle: '#drag',
        opacity: 0.7,
        containment: "document"
      })
    })
    $('#size').click(() => {
       console.log(this.hidden)
      if(this.hidden){
        console.log(this.hidden)
        $('#mydiv').animate({
          position: "absolute",
          top: '100px'
        });
        $('#content').show(1000);
        this.hidden = false;
      }
      else {
        $('#content').hide(1000);
        this.hidden = true;
      }
      
    });

  $('#minimize').click(function() {
    let windowSize = $(window).width();
    let finalSize = windowSize - 267;
    $('#content').hide();
    $('#mydiv').animate({
      position: "absolute",
      top: "10px",
      left: `${finalSize}px`
    })        
});
  }
}
