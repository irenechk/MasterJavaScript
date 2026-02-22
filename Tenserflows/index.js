// import * from '@tensorflow/tfjs-node'

async function predictY() {
    const model = tf.sequential();

    model.add(
        tf.layers.dense({
            units: 1,
            inputShape: [1]
        })
    )
    model.compile({
        optimizer: tf.train.sgd(0.1),
        loss: "meanSquaredError",
        
    })

    x = tf.tensor2d ([ 0, 1, 2, 3, 4, 5] , [6,1] )
    y = tf.tensor2d ([ -1, 1, 3, 5, 7, 9], [6,1] )
    // we convert it into matrix cuz it works on it 
    
    await model.fit(x, y, { epochs: 200 })

    let result = model.predict(tf.tensor2d([6], [1, 1]))
    result.print()
}

predictY();