module.exports = (sequelize, DataTypes) => {
    const Publi = sequelize.define(
        'Publi', {
            title: DataTypes.STRING,
            userId: DataTypes.INTEGER,
            content: DataTypes.STRING,
            attachment: DataTypes.STRING,
            likes: DataTypes.INTEGER
        }, {}
    );

    Publi.associate = function (models) {
        models.Publi.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Publication;
};