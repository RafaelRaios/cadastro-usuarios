permutaLinhas :: Int -> Int -> [[a]] -> [[a]]
permutaLinhas x y matriz 
    | x < 0 || y > lenght matriz || x >= y = error "indices fora da especificacao"
    | otherwise = take x matriz ++
                [matriz !! y] ++
                take (y - x -1) (drop (x + 1) matriz) ++
                [matriz !! x] ++
                drop (y + 1) matriz