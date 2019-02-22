// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'black';
    fill = fill || 'white';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(20, 15, canvas.width - 35, canvas.height - 30);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width -20;
    let height = rctx.canvas.height - 15;
    for ( var ix = 0; ix < width - 10; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix + 20, 15 );
        rctx.lineTo( ix + 20, height);
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix/5, ix + 15, 10 ); }
    }
    for ( var iy = 0; iy < height -10; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 20, iy + 15 );
        rctx.lineTo( width + 5, iy + 15 );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0  && iy != 0) {rctx.fillText( iy /5, 0, iy + 20 );}
    }
    rctx.restore( );
}

// fills the boxes according to the Wolfram Cella 90 Rule
function cella_90( ctx, num_canvas_cells) 
{
    // the offset of the canvas to put the squares in the right place
    var x_offset = 20;
    var y_offset = 15;

    // the number of pixels of every box
    var box_size = 5;

    // initializes the 400x400 array (filled with 0s) to determine coloring
    let array = Array(num_canvas_cells).fill().map(() => Array(num_canvas_cells).fill(0));    

    // initializes the start of the cella rule
    array[0][Math.floor(num_canvas_cells / 2) - 1] = 1;

    console.log(array[0][199]);

    // for indexing through the rows starting at the second one since the first one has been initialized
    for ( var i = 1; i < 400; ++i )
    {
        // for indexing through the columns
        // you do not need to search every element since the rules expands linearly outwards in each direction
        for ( var j = 199 - i; j < 200 + i; ++j )
        {
            // value to be passed into rule_rule check to determine the next generation of the cell
            var cell_value = 0;

            // checks to make sure that you don't index out of the array in the bottom row
            if(i != 399)
            {
                // checks the value of above and left
                if(array[i - 1][j - 1] == 1)
                {
                    cell_value += 4;
                }

                // checks the value of above and right
                if(array[i - 1][j + 1] == 1)
                {
                    cell_value += 1;
                }
            }


            // checks the value of right above
            if(array[i - 1][j] == 1)
            {
                cell_value += 2;
            }


            //rule_check(array);
            //console.log(array[i][j]);
        }
    }

    ctx.save( );
    ctx.fillStyle = 'yellow';

    // puts a box in the first corner of the canvas
    //ctx.rect(x_offset, y_offset, 5, 5);

    ctx.rect(x_offset + (box_size * 199), y_offset, 5, 5);
    ctx.fill();
    ctx.restore( );
}

// function rule_check()
// {
    
// }