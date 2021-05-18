1. Сделать перечеркивание при нажтии на Staric tr
2. Ограничить input count and price, type Numbers
3. TotalPrice
4. count products taken


"<input type='text' class='name' value='"+ name +"' placeholder='name' onChange='changeState("+id+", `name`, value)' >" +    
                        "<input type='text' class='count' value='"+ count +"' placeholder='count' onChange='changeState("+id+", `count`, value)'>" +
                        "<input type='text' class='price' value='"+ price +"' placeholder='price' onChange='changeState("+id+", `price`, value)'>" +
                        "<th class='totalCost'>" + totalCost + "</th>";