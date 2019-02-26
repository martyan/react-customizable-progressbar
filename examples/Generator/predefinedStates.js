export const defaultState = {
    radius: 100,
    progress: 66,
    steps: 100,
    cut: 0,
    rotate: -90,
    strokeWidth: 20,
    strokeColor: 'indianred',
    fillColor: 'none',
    strokeLinecap: 'round',
    transition: '.3s ease',
    pointerRadius: 0,
    pointerStrokeWidth: 20,
    pointerStrokeColor: 'indianred',
    pointerFillColor: 'white',
    trackStrokeColor: '#e6e6e6',
    trackStrokeWidth: 20,
    trackStrokeLinecap: 'round',
    trackTransition: '.3s ease',
    counterClockwise: false,
    inverse: false,
    initialAnimation: false,
    initialAnimationDelay: 0,
    className: null
}

export const example1State = {
    ...defaultState,
    strokeWidth: 18,
    strokeColor: '#5d9cec',
    strokeLinecap: 'square',
    trackStrokeWidth: 18
}

export const example2State = {
    ...defaultState,
    strokeWidth: 18,
    strokeColor: '#a0d468',
    strokeLinecap: 'round',
    trackStrokeWidth: 18,
    counterClockwise: true
}

export const example3State = {
    ...defaultState,
    strokeWidth: 28,
    strokeColor: '#ffce54',
    strokeLinecap: 'butt',
    trackStrokeWidth: 14,
    trackStrokeLinecap: 'butt',
    cut: 120,
    rotate: -210
}

export const example4State = {
    ...defaultState,
    strokeWidth: 4,
    strokeColor: 'indianred',
    trackStrokeWidth: 4,
    pointerRadius: 8,
    pointerStrokeWidth: 5,
    pointerStrokeColor: 'indianred'
}

export const example5State = {
    ...defaultState,
    fillColor: '#f2f2f2',
    strokeWidth: 2,
    strokeColor: '#656d78',
    trackStrokeWidth: 2,
    pointerRadius: 12,
    pointerStrokeWidth: 2,
    pointerStrokeColor: '#656d78',
    inverse: true
}
