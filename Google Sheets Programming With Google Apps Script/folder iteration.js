function listDriveFolders() {
    var it = DriveApp.getFolders(),
        folder;
    Logger.log(it);
    while (it.hasNext()) {
        folder = it.next();
        Logger.log(folder.getName());
        Logger.log(folder.getId());
    }
}