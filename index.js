(function()
{
    function fillFlexibleGrid(size = 16)
    {
        let gridMain = document.querySelector('.main');




        for(let i = 0; i < size; ++i)
        {
            addRow();
            fillRow();
        }

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

    fillFlexibleGrid(2);

})();