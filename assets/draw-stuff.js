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
    ctx.rect(20, 15, canvas.width - 40, canvas.height - 35);
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
    let width = rctx.canvas.width - 25;
    let height = rctx.canvas.height - 20;
    for ( var ix = 0; ix < width - 10; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix + 20, 15 );
        rctx.lineTo( ix + 20, height);
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix / 5, ix + 15, 10 ); }
    }
    for ( var iy = 0; iy < height - 10; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 20, iy + 15 );
        rctx.lineTo( width + 5, iy + 15 );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0  && iy != 0) {rctx.fillText( iy / 5, 0, iy + 20 );}
    }
    rctx.restore( );
}

// fills the boxes according to the Wolfram Cella 90 Rule
function cella_90( ctx, num_canvas_cells) 
{
    ctx.save( );
    // the offset of the canvas to put the squares in the right place
    var x_offset = 20;
    var y_offset = 15;

    // the number of pixels of every box
    var box_size = 5;

    // initializes the 400x400 array (filled with 0s) to determine coloring
    let array = Array(num_canvas_cells).fill().map(() => Array(num_canvas_cells).fill(0));    

    // initializes the start of the cella rule
    var half_num_canvas = Math.floor(num_canvas_cells / 2);
    var starting_index = half_num_canvas - 1;
    array[0][starting_index] = 1;
    color_starting_square(ctx, num_canvas_cells, x_offset, y_offset);
    
    //console.log(array[0][starting_index]);

    // for indexing through the rows starting at the second one since the first one has been initialized
    for ( var i = 1; i <= num_canvas_cells; ++i )
    {
        //nap(1000);
        // for indexing through the columns
        // you do not need to search every element since the rules expands linearly outwards in each direction
        for ( var j = starting_index - i; j < half_num_canvas + i; ++j )
        {
            if(j >= 0 && j <= 399)
            {
                // value to be passed into rule_rule check to determine the next generation of the cell
                var cell_value = 0;

                // checks to make sure that you don't index out of the array in the bottom row
                if (i !== num_canvas_cells - 1)
                {
                    // checks the value of above and left
                    if (array[i - 1][j - 1] === 1)
                    {
                        cell_value += 4;
                    }

                    // checks the value of above and right
                    if (array[i - 1][j + 1] === 1)
                    {
                        cell_value += 1;
                    }
                }

                // checks the value of right above
                if (array[i - 1][j] === 1)
                {
                    cell_value += 2;
                }

                var color = rule_check(cell_value);
                //console.log(color);

                // colors the square if it is 1 i.e. black, since the color is already white
                if (color === 1)
                {
                    array[i][j] = 1;
                    
                    ctx.fillStyle = 'black';

                    // rect(the x cord in the upper left corner, the y cord of the upper left rect, width, height)
                    ctx.rect(x_offset + (j * 5), y_offset + (i * 5), 5, 5);
                    ctx.fill();
                    
                }
            }
            
        }
    }
    ctx.restore( );
}

function color_starting_square(ctx, num_canvas_cells, x_offset, y_offset)
{
    ctx.save( );
    ctx.fillStyle = 'black';

    // rect(the x cord in the upper left corner, the y cord of the upper left rect, width, height)
    ctx.rect(x_offset + ((Math.floor(num_canvas_cells / 2) - 1) * 5), y_offset, 5, 5);
    ctx.fill();
    ctx.restore( );
}

// returns cella value (0 or 1) of the binary value of the above 3 cells provided 
function rule_check(cell_value)
{
    // we could implement to just check if can be black since the squares are already white
    // but we want to show we understand the problem :)
    switch(cell_value)
    {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 0;
        case 3:
            return 1;
        case 4:
            return 1;
        case 5:
            return 0;
        case 6:
            return 1;
        default :
            return 0;
    }
}

function nap(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function sleep(ms) {
    console.log('Taking a break...');
    await nap(ms);
    console.log('Two seconds later');
  }