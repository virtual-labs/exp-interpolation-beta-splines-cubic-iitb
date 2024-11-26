function calculate_xu() {
    for (let i = 0; i <= 4; i++) {
        //xu[i] = (((1-u[i]**3)*x_val[0])/6)+(((3 * u[i]**3) - (6 * u[i]**3) + 4)* x_val[1]/6) + (-3*u[i]**3 + 3*u[i]**2 +3*u[i] + 1)+x_val[2]**3/6 + (u[i]**3 * x_val[3]/6);
        //xu[i] = (((1-u[i]**3)*x_val[0])/6) + ((((3*u[i]**3)-(6*u[i]**2)+4)*x_val[1])/6) + ((((-3*u[i]**3)+(3*u[i]**2)+(3*u[i])+1)*x_val[2])/6) + ((u[i]**3 * x_val[3])/6);
        xu[i] = Math.pow((1 - u[i]), 3) * x_val[0] + (3 * Math.pow(u[i], 3) - 6 * Math.pow(u[i], 2) + 4) * x_val[1] + (-3 * Math.pow(u[i], 3) + 3 * Math.pow(u[i], 2) + 3 * u[i] + 1) * x_val[2] + Math.pow(u[i], 3) * x_val[3];
        xu[i] = xu[i] / 6;
    }
    return (xu);
}
function calculate_yu() {
    for (let i = 0; i <= 4; i++) {
        //yu[i] = (((1-u[i]**3)*y_val[0])/6)+(((3 * u[i]**3) - (6 * u[i]**3) + 4)* y_val[1]/6) + (-3*u[i]**3 + 3*u[i]**2 +3*u[i] + 1)+y_val[2]**3/6 + (u[i]**3 * y_val[3]/6);
        //yu[i] = (((1-u[i]**3)*y_val[0])/6) + ((((3*u[i]**3)-(6*u[i]**2)+4)*y_val[1])/6) + ((((-3*u[i]**3)+(3*u[i]**2)+(3*u[i])+1)*y_val[2])/6) + ((u[i]**3 * y_val[3])/6);
        yu[i] = Math.pow((1 - u[i]), 3) * y_val[0] + (3 * Math.pow(u[i], 3) - 6 * Math.pow(u[i], 2) + 4) * y_val[1] + (-3 * Math.pow(u[i], 3) + 3 * Math.pow(u[i], 2) + 3 * u[i] + 1) * y_val[2] + Math.pow(u[i], 3) * y_val[3];
        yu[i] = yu[i] / 6;
    }
    return (yu);
}
//# sourceMappingURL=bspline.js.map