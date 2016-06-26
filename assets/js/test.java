import java.io.File;
import java.nio.file.Files;
import java.io.IOException;

public class test {
	public static void main(String... args) {
		String directoryName = "C:\\Users\\dmssa_000\\Documents\\Web\\MHSrobots\\mhsrobotics\\assets\\js";
		File directory = new File(directoryName);

        //get all the files from a directory

        

        displayFiles(directory);
    }
	
	public static void displayFiles(File entry) {
		File[] fList = entry.listFiles();
		for (File file : fList){
			if (file.isDirectory()) {
				displayFiles(file);
				continue;
			}
			System.out.println(file.getAbsolutePath());
			try {
				Files.lines(file.toPath());
			} catch (IOException ex) {
				System.err.println(ex.getMessage());
				ex.printStackTrace();
			}
        }
	}
}
