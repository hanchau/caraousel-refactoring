
function update_infobox(str) {
    $("#infoBox").text( str );
}

function CoverFlow( div, data ) {
    this.base = false;
    this.data = data;
    this.selectedIdx = parseInt(data.length/2);
    var that = this;

    // The Node and Event modules are loaded and ready to use.
    // Your code goes here!

    this.base = $( div );

    this.base.append( " <a id=backward>&laquo;</a> " )

    // generate all of the image tags as appropraite for the data structure
    // provided, and set up the event handler for them.  Be sure to keep the
    // that = this closure in place or else you'll be sad when the event
    // fires on click!1
    for( var key in data  ) {

        var html = '<img id="IMAGE_'+key+'" src="'+data[key].img+'"';

        if( key == this.selectedIdx ) {
            html += " style='width: 200px; height: 200px;' "
        } else {
            html += " style='width: 100px; height: 100px;' "
        }

        html += ' /> ';

        this.base.append( html );

        $("#IMAGE_"+key).click( function(){
            that.Select(this);
        } );
    }

    this.base.append( " <button id=forward>&raquo;</button> " );

    this.base.append( "<br /><div id=infoBox style='margin-left: 230px;' >" +
        data[this.selectedIdx].info + "</div>" );

    $("#backward").click( function(){that.goLeft()} );
    $("#forward").click( function(){that.goRight()} );

};

CoverFlow.prototype = {
    Selected : function() {
        return this.data[this.current];
    },

    goLeft : function() {
        if( this.selectedIdx > 0 )
            this.selectedIdx --;
        else
            alert( "You can't go farther left." );

        for( i=0; i<this.data.length; i++ ) {
            $('#IMAGE_'+i).width( '100' );
            $('#IMAGE_'+i).height( '100' );
        }

        $('#IMAGE_'+this.selectedIdx).height( '200' );
        $('#IMAGE_'+this.selectedIdx).width( '200' );

        update_infobox(this.data[this.selectedIdx].info);
    },

    goRight : function() {
        if( this.selectedIdx < this.data.length-1 )
            this.selectedIdx ++;

        for( i=0; i<this.data.length; i++ ) {
            $('#IMAGE_'+i).css( 'width', '100px' );
            $('#IMAGE_'+i).css( 'height', '100px' );
        }

        $('#IMAGE_'+this.selectedIdx).css( 'width', '200px' );
        $('#IMAGE_'+this.selectedIdx).css( 'height', '200px' );


        $("#infoBox").text( this.data[this.selectedIdx].info );
    },
    Select: function(element) {

        var idx = element.id.replace( "IMAGE_","" );

        this.selectedIdx = idx;

        for( i=0; i<this.data.length; i++ ) {
            $('#IMAGE_'+i).css( 'width', '100px' );
            $('#IMAGE_'+i).css( 'height', '100px' );
        }

        $('#IMAGE_'+idx).css( 'width', '200px' );
        $('#IMAGE_'+idx).css( 'height', '200px' );

        update_infobox(this.data[this.selectedIdx].info);
    }
};
