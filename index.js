(function()
{


    let grid = createFlexibleGrid(10);

    grid.addEventListener('pointerover', drawCellColor);

    document.body.append(grid);
    
    function createFlexibleGrid(size = 16)
    {
        

        // let gridMain = document.querySelector('.main');

        let gridMain = document.createElement('div');
        gridMain.className = 'main';


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