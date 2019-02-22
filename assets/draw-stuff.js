// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
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
