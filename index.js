(function()
{


    let grid = createFlexibleGrid(100);



    let sketchPad = document.querySelector('.main');

    sketchPad.addEventListener('pointerover', drawCellColor);

    sketchPad.append(grid);
    
    function createFlexibleGrid(size = 16)
    {
        

        // let gridMain = document.querySelector('.main');

        let gridMain = new DocumentFragment();


        for(let i = 0; i < size; ++i)
        {
            addRow();
            fillRow();
        }


        return gridMain;

        function addRow()
        {
            gridMain.append(document.createElement('div'));
        }

        function fillRow()
        {
            for(let i = 0; i < size; ++i)
                gridMain.lastElementChild.append(document.createElement('div'));
        }
    }


    function drawCellColor(event)
    {
        if(event.target.children.length > 0)
            return;

        event.target.style.backgroundColor = 'black';
        
    }







})();